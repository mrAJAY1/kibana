/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { withSuspense } from '@kbn/shared-ux-utility';
import { lazy } from 'react';

export type { LogExplorerTabsProps } from './log_explorer_tabs';

export const LogExplorerTabs = withSuspense(lazy(() => import('./log_explorer_tabs')));
