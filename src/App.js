import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogComponent from "./Components/BlogComponent";
import HeaderComponent from "./Components/HeaderComponent";
import HomeComponent from "./Components/HomeComponent";
function App() {
  return (
    // <div>
    //   <HeaderComponent/>
    //   <HomeComponent posts={posts}/>
    //   {/* <BlogComponent/> */}
    // </div>
    <Router>
      <HeaderComponent/>
      <Switch>
        <Route exact path='/'>
          <HomeComponent/>
        </Route>
        <Route path='/create'>
          <BlogComponent/>
        </Route>
        {/* <Route path="/posts/:id">
					<BlogComponent />
				</Route> */}
      </Switch>
    </Router>
  );
}

export default App;
