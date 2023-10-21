import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const PlayBooks = React.lazy(() => Federated.importModule('playbooks', './App'));

const PlayBooksScreen = () => {
  return (
    <ErrorBoundary name="PlayBooksScreen">
      <React.Suspense
        fallback={<Placeholder label="PlayBooks" icon="book" />}>
        <PlayBooks />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default PlayBooksScreen;
