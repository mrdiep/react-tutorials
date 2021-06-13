import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return <div>
    <FptFormRegister what={1} />
    <FptFormLogin why={2} />
  </div>;
}

class LoginComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Field fieldName="username" displayName="Login with User Name"></Field>
      </div>
    );
  }
}

class RegisterComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Field
          fieldName="username"
          displayName="Register with User Name"
        ></Field>
      </div>
    );
  }
}

function createFieldWithConnect({ formName, fieldName }) {
  console.log('formName, fieldName = ', formName,',', fieldName)

  const HOC = connect(
    (currentStore) => ({ [fieldName]: currentStore.loginX[formName][fieldName] }),
    (dispatch) => ({
      setChange: (formName, value) =>
        dispatch({
          type: "CHANGE_VALUE",
          payload: { formName, fieldName, value },
        }),
    })
  );

  return HOC;
}

function Field(props) {
  return (
    <FptReduxFormContext.Consumer>
      {(fptContext) => {
        console.log(fptContext, props);

        const Child = (childProps) => (
          <div>
            {childProps.displayName} :{" "}
            <input
              value={childProps[childProps.fieldName]}
              onChange={(x) =>
                childProps.setChange(fptContext.formName, x.target.value)
              }
            ></input>
          </div>
        );

        const field_redux_connect = createFieldWithConnect({
          formName: fptContext.formName,
          fieldName: props.fieldName,
        });

        const T = field_redux_connect(Child);
        return <T {...props} />;
      }}

    </FptReduxFormContext.Consumer>
  );
}

const FptReduxFormContext = React.createContext({ formName: null });

const withFptForm = ({ formName }) => {
  return (FormComponent) => (props) =>
    (
      <FptReduxFormContext.Provider value={{ formName }}>
        <FormComponent {...props} />
      </FptReduxFormContext.Provider>
    );
};

const FptFormLogin = withFptForm({ formName: "login_form" })(LoginComponent);
const FptFormRegister = withFptForm({ formName: "register_form" })(RegisterComponent);

export default App;
