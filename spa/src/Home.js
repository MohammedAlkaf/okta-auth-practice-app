import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();

  // user gets redirected once they log in to 'profile'
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });

  //Quick first render cuz auth state isn't known yet
  if (!authState) {
    return <div>Loading authentication</div>;
  // auth state known now and check if user authenticated
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <button onClick={login}>Login</button>
      </div>
    );
  } else {
    return "You are Authenticated up in here!";
  }
};
export default Home;
