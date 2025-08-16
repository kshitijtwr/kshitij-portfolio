import React from 'react';
import { Route, Switch, HashRouter } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Wrap your routes in HashRouter */}
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
