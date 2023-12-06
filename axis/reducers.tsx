import {
   DRIVER_CHANGED,
   REVENUES_CHANGED,
   BASE_CONTRIBUTION_LEVEL_CHANGED,
   COLLAPSED_CHANGED,
   SIM_CONTRIBUTION_LEVEL_CHANGED,
   OBJECT_CHANGED,
   SIMULATION_CHANGED,
} from "../constants";

export const axis = (axis: any = null, action: any) => {
   switch (action.type) {
      case DRIVER_CHANGED:
         axis = {
            ...axis,
            drivers: action.drivers,
         };
         return axis;
      case REVENUES_CHANGED:
         axis = {
            ...axis,
            revenues: action.revenues,
         };
         return axis;
      case BASE_CONTRIBUTION_LEVEL_CHANGED:
         axis = {
            ...axis,
            baseContributionLevelsTotal: action.baseContributionLevelsTotal,
         };
         return axis;
      case COLLAPSED_CHANGED:
         axis = {
            ...axis,
            collapsed: action.collapsed,
         };
         return axis;
      case SIM_CONTRIBUTION_LEVEL_CHANGED:
         axis = {
            ...axis,
            simContributionLevelsTotal: action.simContributionLevelsTotal,
         };
         return axis;
      case OBJECT_CHANGED:
         axis = {
            ...axis,
            object: action.object,
         };
         return axis;
      case SIMULATION_CHANGED:
         axis = {
            ...axis,
            simulation: action.simulation,
         };
         return axis;
   }

   return axis;
};
