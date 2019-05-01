import { createSelector } from "reselect";
import { AppState } from "..";
import { Magic } from "./types";

const getMagic = (state: AppState) => state.magic.magics;

//const getDescriptors = (state: AppState) => state.magic.descriptors;

//const getMagicCircles = (state: AppState) => state.magic.magicCircle;

const getFilter = (state: AppState) => state.filter;

const getFavorites = (state: AppState) => state.favorites.favorites;

export const getVisibleMagic = createSelector(
  [getMagic, getFavorites, getFilter],
  (magics, favorites, filters) => {
    return magics.filter((magic: Magic) => {
      if (filters.isFavorited && !favorites.includes(magic.id)) {
        return false;
      } else if (
        filters.magicCircle.length &&
        !magic.circles.find(
          circle => filters.magicCircle.indexOf(circle.id) > -1
        )
      ) {
        return false;
      } else if (
        filters.tiers.length &&
        !magic.circles.find(circle => filters.tiers.indexOf(circle.tier) > -1)
      ) {
        return false;
      } else if (
        filters.descriptors.length &&
        magic.circles.find(
          circle =>
            !circle.descriptor.find(
              descriptor => filters.descriptors.indexOf(descriptor) > -1
            )
        )
      ) {
        return false;
      } else if (
        (filters.nameSearch.length &&
          magic.name.indexOf(filters.nameSearch) > -1) ||
        (magic.tags && magic.tags.indexOf(filters.nameSearch) > -1)
      ) {
      }
      return true;
    });
  }
);
