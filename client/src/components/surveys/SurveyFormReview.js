import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import _ from 'lodash';

const SurveyFormReview = ({onCancel, formValues, submitSurvey}) => {
  const reviewFields = _.map (formFields, ({label, name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        back
      </button>
      <button
        onClick={() => submitSurvey (formValues)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStatefromProps (state) {
  return {formValues: state.form.surveyForm.values};
}

export default connect (mapStatefromProps, actions) (SurveyFormReview);
