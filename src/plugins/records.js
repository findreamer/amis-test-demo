import { BasePlugin, PanelItem } from 'amis-editor';

export class RecordPlugin extends BasePlugin {
  buildEditorPanel(context, panels) {
    const recordPannel: PanelItem = {
      key: 'moxomoxo',
      title: 'test',
      position: 'left',
      icon: 'fa fa-star',

      render: () => {
        return <div>dsdada</div>;
      },
    };
    panels.push(recordPannel);
  }
}
