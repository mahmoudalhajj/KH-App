import { observable, runInAction } from "mobx";
import { E_LOG_ERROR } from "../enums/strings";

const MOCK_ITEMS = [
  { id: 1, name: "Item1" },
  { id: 2, name: "Item2" },
];

export class OnboardingStore {
  loading = observable.box(false);
  selectedId = observable.box<number | null>(null);
  searchText = observable.box("");
  itemsById = observable.map<number, string>();

  setLoading = (loading: boolean) => {
    runInAction(() => {
      this.loading.set(loading);
    });
  };

  setSelectedId = (id: number) => {
    runInAction(() => {
      this.selectedId.set(id);
    });
  };

  setSearchText = (text: string) => {
    runInAction(() => {
      this.searchText.set(text);
    });
  };

  getIsLoading = () => {
    return this.loading.get();
  };

  getSelectedId = () => {
    return this.selectedId.get();
  };

  getSearchText = () => {
    return this.searchText.get();
  };

  updateItems = async () => {
    this.setLoading(true);
    try {
      const data = await Promise.resolve(MOCK_ITEMS);

      runInAction(() => {
        data.forEach((item) => {
          this.itemsById.set(item.id, item.name);
        });
      });
    } catch (error) {
      runInAction(() => {
        console.error(E_LOG_ERROR.FETCH_ITEMS, error);
      });
    }
    this.setLoading(false);
  };
}

export const onboardingStore = new OnboardingStore();
