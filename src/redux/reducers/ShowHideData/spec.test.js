
import {
    SHOW_DATA,HIDE_DATA
  } from "../../../constants/constants";
import ShowHideDataReducer from './ShowHideDataReducer';

describe('Show Hide Reducer',() => {
      it('Should return default state',() => {
          const newState = ShowHideDataReducer(true,{});
          expect(newState).toEqual(true);
      });

      it('should return Show state',() => {
          const newState = ShowHideDataReducer(true,{
              type:SHOW_DATA,
              payload:true
          });
          expect(newState).toEqual(true);
      });

      it('should return Hide state',() => {
          const newState = ShowHideDataReducer(false,{
              type:HIDE_DATA,
              payload:false
          });
          expect(newState).toEqual(false);
      })
  })