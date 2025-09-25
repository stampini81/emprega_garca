import { formatterUtil } from "./formatter-util";

interface IFilter {
  [key: string]: string;
}

class FilterUtil {
  buildFiltersURL(filters: IFilter): string {
    let urlFilters = "";

    for (const key in filters) {
      if (key !== "page") {
        urlFilters += `&${key}=${formatterUtil.removeLeadingZeros(
          filters[key]
        )}`;
      }
    }

    return urlFilters;
  }
}

export const filterUtil = new FilterUtil();
