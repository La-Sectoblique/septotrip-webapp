import { moveItemInArray } from '@angular/cdk/drag-drop';
import { createReducer, on } from '@ngrx/store';

import * as TripsAction from './trips.actions';
import { initialTripState } from './trips.state';

export const tripReducer = createReducer(
  initialTripState,

  on(TripsAction.ResetTripStore, () => ({
    ...initialTripState,
  })),

  // === TRIPS ===
  on(TripsAction.GetUserTripsSuccess, (state, { trips }) => {
    let newTrips = {};
    trips.forEach((trip) => {
      newTrips = {
        ...newTrips,
        [trip.id]: {
          ...state.trips[trip.id],
          tripInstance: trip,
        },
      };
    });
    return {
      ...state,
      trips: newTrips,
    };
  }),

  on(TripsAction.GetTripSuccess, (state, { trip }) => ({
    ...state,
    trips: {
      ...state.trips,
      [trip.id]: {
        ...state.trips[trip.id],
        tripInstance: trip,
      },
    },
  })),

  on(TripsAction.UpdateTripSuccess, (state, { newTrip }) => ({
    ...state,
    trips: {
      ...state.trips,
      [newTrip.id]: {
        ...state.trips[newTrip.id],
        tripInstance: newTrip,
      },
    },
  })),

  on(TripsAction.DeleteTripSuccess, (state, { tripId }) => ({
    ...state,
    trips: Object.values(state.trips).filter((trip) => trip.tripInstance.id !== tripId),
  })),

  // === STEPS ===

  on(TripsAction.GetTripStepsSuccess, (state, { steps, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        steps: steps.map((step) => ({ ...step, stepInstance: step })),
      },
    },
  })),

  on(TripsAction.CreateTripStepSuccess, (state, { step, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        steps: [
          ...state.trips[tripId].steps,
          { stepInstance: step },
        ],
      },
    },
  })),

  on(TripsAction.UpdateTripStepSuccess, (state, { tripId, newStep }) => {
    const steps = state.trips[tripId].steps.map((step) => {
      if (step.stepInstance.id === newStep.id) {
        return {
          ...step,
          stepInstance: newStep,
        };
      }
      return step;
    });

    return {
      ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          steps,
        },
      },
    };
  }),

  on(TripsAction.DeleteTripStepSuccess, (state, { stepId, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        steps: state.trips[tripId].steps.filter((step) => step.stepInstance?.id !== stepId),
      },
    },
  })),

  on(TripsAction.UpdateTripStepOrder, (state, { fromIdx, toIdx, tripId }) => {

    const reorderedSteps = [...state.trips[tripId].steps];
    moveItemInArray(reorderedSteps, fromIdx, toIdx);

    return {
      ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          steps: reorderedSteps,
        },
      },
    };
  }),

  // === DAYS ===

  on(TripsAction.GetStepDaysSuccess, (state, { days, tripId, stepId }) => {
    const steps = state.trips[tripId].steps.map((step) => {
      if (step.stepInstance.id === stepId) {
        return {
          ...step,
          daysInstance: days,
        };
      }
      return step;
    });

    return { ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          steps,
        },
      } };
  }),

  // === PATHS ===

  on(TripsAction.GetPathToStepSuccess, (state, { path, tripId, stepId }) => {
    const steps = state.trips[tripId].steps.map((step) => {
      if (step.stepInstance.id === stepId) {
        return {
          ...step,
          pathToStep: path,
        };
      }
      return step;
    });

    return { ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          steps,
        },
      },
    };
  }),

  on(TripsAction.UpdatePathSuccess, (state, { tripId, stepId, path }) => {
    const steps = state.trips[tripId].steps.map((step) => {
      if (step.stepInstance.id === stepId) {
        return {
          ...step,
          pathToStep: path,
        };
      }
      return step;
    });

    return {
      ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          steps,
        },
      },
    };
  }),

  // === POINTS ===

  on(TripsAction.GetTripPointsSuccess, (state, { points, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        points,
      },
    },
  })),

  on(TripsAction.CreateTripPointSuccess, (state, { point, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        points: [
          ...state.trips[tripId].points,
          point,
        ],
      },
    },
  })),

  on(TripsAction.UpdateTripPointSuccess, (state, { tripId, newPoint }) => {
    const points = state.trips[tripId].points.map((point) => {
      if (point.id === newPoint.id) {
        return {
          ...newPoint,
          daysIds: point.daysIds,
        };
      }
      return point;
    });

    return {
      ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          points,
        },
      },
    };
  }),

  on(TripsAction.DeleteTripPointSuccess, (state, { pointId, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        points: state.trips[tripId]?.points?.filter((point) => point.id !== pointId),
      },
    },
  })),

  on(TripsAction.RefreshPointsDayIdsSuccess, (state, { tripId, dayId, dayPoints }) => {

    const matchingPointsIds = dayPoints.map((point) => point.id);

    const points = state.trips[tripId].points.map((point) => {
      if (matchingPointsIds.includes(point.id)) {
        return {
          ...point,
          daysIds: point.daysIds
            ? [...point.daysIds, dayId]
            : [dayId],
        };
      }
      return point;
    });

    return {
      ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          points,
        },
      },
    };
  }),

  on(TripsAction.UpdatePointDaysSuccess, (state, { tripId, pointId, daysIds }) => {

    const points = state.trips[tripId].points.map((point) => {
      if (point.id === pointId) {
        return {
          ...point,
          daysIds,
        };
      }

      return point;
    });

    return {
      ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          points,
        },
      },
    };
  }),

  // === TRAVELERS ===

  on(TripsAction.GetTripTravelersSuccess, (state, { tripId, travelers }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        travelers,
      },
    },
  })),

  on(TripsAction.RemoveTripTravelerSuccess, (state, { tripId, userId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        travelers: state.trips[tripId].travelers.filter((traveler) => traveler.id !== userId),
      },
    },
  })),
);
