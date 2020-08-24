import React, {Component, Fragment} from 'react';
import RecipeDetails1 from "../components/RecipeDetails/RecipeDetails1";
import Footer from "../components/Footer/Footer";
import TopBanner from "../components/TopBanner/TopBanner";


class RecipeDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopBanner/>
                <RecipeDetails1/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RecipeDetailsPage;