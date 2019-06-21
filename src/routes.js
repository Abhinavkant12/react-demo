import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// Lazy Loading
const LifeCycleHooks = lazy(() => import("./app/component/LifeCycleHooks"));
const ContextApiParent = lazy(() => import("./app/component/ContextApi"));

export default (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={LifeCycleHooks} />
            <Route path="/context-api" component={ContextApiParent} />
         
            {/* <SecuredRoute path="/admin" component={AdminComponent} /> */}
            <Route path="**" render={
                () => (
                    <article>
                        <h1 className="text-danger">No Route Configured!</h1>
                        <p className="text-danger">Please check your Route Configuration</p>
                    </article>
                )
            } />
        </Switch>
    </Suspense>
);