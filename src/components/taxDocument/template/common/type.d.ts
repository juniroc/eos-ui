export type FormUpdater<K> = <T extends keyof K>(field: T, value: K[T]) => void;

export type UpdaterProps<K> = K & {
  updater: FormUpdater<K>;
};

export type FormPageProps<K> = UpdaterProps<K> & {
  pageIndex: number;
  onAddPage: () => void;
};

export type SplitCurrency = {
  trillion: number; // 조

  billion: number; // 십억

  million: number; // 백만

  thousand: number; // 천

  one: number; // 일
};
