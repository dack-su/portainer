import angular from 'angular';

import { r2a } from '@/react-tools/react2angular';
import { withControlledInput } from '@/react-tools/withControlledInput';
import { StackContainersDatatable } from '@/react/common/stacks/ItemView/StackContainersDatatable';
import { ContainerQuickActions } from '@/react/docker/containers/components/ContainerQuickActions';
import { TemplateListDropdownAngular } from '@/react/docker/app-templates/TemplateListDropdown';
import { TemplateListSortAngular } from '@/react/docker/app-templates/TemplateListSort';
import { Gpu } from '@/react/docker/containers/CreateView/Gpu';
import { withCurrentUser } from '@/react-tools/withCurrentUser';
import { withReactQuery } from '@/react-tools/withReactQuery';
import { withUIRouter } from '@/react-tools/withUIRouter';
import { DockerfileDetails } from '@/react/docker/images/ItemView/DockerfileDetails';
import { HealthStatus } from '@/react/docker/containers/ItemView/HealthStatus';
import { GpusList } from '@/react/docker/host/SetupView/GpusList';
import { InsightsBox } from '@/react/components/InsightsBox';
import { BetaAlert } from '@/react/portainer/environments/update-schedules/common/BetaAlert';
import { ImagesDatatable } from '@/react/docker/images/ListView/ImagesDatatable/ImagesDatatable';
import { EventsDatatable } from '@/react/docker/events/EventsDatatables';
import { ConfigsDatatable } from '@/react/docker/configs/ListView/ConfigsDatatable';
import { AgentHostBrowser } from '@/react/docker/host/BrowseView/AgentHostBrowser';
import { AgentVolumeBrowser } from '@/react/docker/volumes/BrowseView/AgentVolumeBrowser';
import { ProcessesDatatable } from '@/react/docker/containers/StatsView/ProcessesDatatable';
import { ScaleServiceButton } from '@/react/docker/services/ListView/ServicesDatatable/columns/schedulingMode/ScaleServiceButton';

import { containersModule } from './containers';

const ngModule = angular
  .module('portainer.docker.react.components', [containersModule])
  .component('dockerfileDetails', r2a(DockerfileDetails, ['image']))
  .component('dockerHealthStatus', r2a(HealthStatus, ['health']))
  .component(
    'containerQuickActions',
    r2a(withUIRouter(withCurrentUser(ContainerQuickActions)), [
      'containerId',
      'nodeName',
      'state',
      'status',
      'taskId',
    ])
  )
  .component('templateListDropdown', TemplateListDropdownAngular)
  .component('templateListSort', TemplateListSortAngular)
  .component(
    'stackContainersDatatable',
    r2a(
      withUIRouter(withReactQuery(withCurrentUser(StackContainersDatatable))),
      ['environment', 'stackName']
    )
  )
  .component(
    'gpu',
    r2a(Gpu, [
      'values',
      'onChange',
      'gpus',
      'usedGpus',
      'usedAllGpus',
      'enableGpuManagement',
    ])
  )
  .component(
    'gpusList',
    r2a(withControlledInput(GpusList), ['value', 'onChange'])
  )
  .component(
    'insightsBox',
    r2a(InsightsBox, [
      'header',
      'content',
      'insightCloseId',
      'type',
      'className',
    ])
  )
  .component('betaAlert', r2a(BetaAlert, ['className', 'message', 'isHtml']))
  .component(
    'dockerImagesDatatable',
    r2a(withUIRouter(withCurrentUser(ImagesDatatable)), [
      'dataset',
      'environment',
      'onRemove',
      'isExportInProgress',
      'isHostColumnVisible',
      'onDownload',
      'onRefresh',
      'onRemove',
    ])
  )
  .component(
    'dockerConfigsDatatable',
    r2a(withUIRouter(ConfigsDatatable), [
      'dataset',
      'onRemoveClick',
      'onRefresh',
    ])
  )
  .component(
    'agentHostBrowserReact',
    r2a(withUIRouter(withCurrentUser(AgentHostBrowser)), [
      'dataset',
      'isRoot',
      'onBrowse',
      'onDelete',
      'onDownload',
      'onFileSelectedForUpload',
      'onGoToParent',
      'onRename',
      'relativePath',
    ])
  )
  .component(
    'agentVolumeBrowserReact',
    r2a(withUIRouter(withCurrentUser(AgentVolumeBrowser)), [
      'dataset',
      'isRoot',
      'isUploadAllowed',
      'onBrowse',
      'onDelete',
      'onDownload',
      'onFileSelectedForUpload',
      'onGoToParent',
      'onRename',
      'relativePath',
    ])
  )
  .component(
    'dockerContainerProcessesDatatable',
    r2a(ProcessesDatatable, ['dataset', 'headers'])
  )
  .component(
    'dockerServicesDatatableScaleServiceButton',
    r2a(withUIRouter(withCurrentUser(ScaleServiceButton)), ['service'])
  )
  .component('dockerEventsDatatable', r2a(EventsDatatable, ['dataset']));

export const componentsModule = ngModule.name;
