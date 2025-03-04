/*
 * Copyright 2021 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Entity } from '@backstage/catalog-model';

export const PROMETHEUS_RULE_ANNOTATION = 'prometheus.io/rule';
export const PROMETHEUS_ALERT_ANNOTATION = 'prometheus.io/alert';
export const PROMETHEUS_SERVICE_NAME_ANNOTATION = 'prometheus.io/service-name';

export const isPrometheusGraphAvailable = (entity: Entity) =>
  Boolean(entity?.metadata.annotations?.[PROMETHEUS_RULE_ANNOTATION]);

export const isPrometheusAlertAvailable = (entity: Entity) =>
  Boolean(entity?.metadata.annotations?.[PROMETHEUS_ALERT_ANNOTATION]);

export const getServiceName = (entity: Entity) =>
  entity?.metadata.annotations?.[PROMETHEUS_SERVICE_NAME_ANNOTATION];
