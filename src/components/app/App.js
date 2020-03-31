import React, { Component } from "react";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import "./app.css";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import ErrorButton from "../errorButton/ErrorButton";
import ErrorBoundary from "../errorBoundry/ErrorBoundary";
import {SwapiServiceProvider} from "../../swapiServiceContext/SwapiServiceContext";
import SwapiService from "../../service/SwapiService";
import PlanetDetails from "../swComponents/PlanetDetails";
import {PersonList, PlanetList, StarshipList} from "../swComponents/ItemLists";
import StarshipDetails from "../swComponents/StarshipDetails";
import PersonDetails from "../swComponents/PersonDetails";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  swapiService = new SwapiService();

  componentDidCatch() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
  }

  render() {
    return (
        <ErrorBoundary>
          <SwapiServiceProvider value={this.swapiService}>
            <div className="container-fluid">
              <Header />
              <RandomPlanet />
              <div className="mb-3">
                <ErrorButton />
              </div>
              <PersonList/>
              <PersonDetails itemId={11} />

              <StarshipList/>
              <StarshipDetails itemId={9}/>

              <PlanetList/>
              <PlanetDetails itemId={2}/>
            </div>
          </SwapiServiceProvider>
        </ErrorBoundary>
    );
  }
}
