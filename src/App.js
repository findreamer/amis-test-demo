import './App.css';
import { Editor } from 'amis-editor';
import { useState, useCallback } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import 'amis-editor-core/lib/style.css';
import { RecordPlugin } from './plugins/records';

function App() {
  const [preview, setPreview] = useState(false);
  const [sechema, setSchema] = useState({
    type: 'page',
    body: {
      label: '点击弹框',
      type: 'button',
      actionType: 'dialog',
      dialog: {
        title: '弹框标题',
        body: [
          {
            type: 'form',
            mode: 'horizontal',
            data: {
              items: [
                {
                  name: 'zhangsan',
                  age: 12,
                },
              ],
            },
            body: [
              {
                type: 'input-table',
                name: 'items',
                label: false,
                columns: [
                  {
                    label: '名字',
                    name: 'name',
                    type: 'input-text',
                  },
                  {
                    label: 'age',
                    name: 'age',
                    type: 'select',
                    multiple: true,
                    sortable: true,
                    searchable: true,
                    selectMode: 'associated',
                    leftMode: 'tree',
                    source:
                      'http://localhost:4000/amis/api/mock2/form/departUser',
                    searchApi:
                      'http://localhost:4000/amis/api/mock2/form/departUserSearch?term=${term}',
                    deferApi:
                      'http://localhost:4000/amis/api/mock2/form/departUser?ref=${ref}&dep=${value}',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  });

  const handleChange = useCallback((val) => {
    setSchema(val);
  }, []);

  return (
    <div className='App'>
      <div>
        <button onClick={() => setPreview(!preview)}>
          {preview ? '编辑' : '预览'}
        </button>
      </div>
      <Editor
        className='custom-editor'
        onChange={handleChange}
        value={sechema}
        data={{ name: 'zhangsan' }}
        plugins={[RecordPlugin]}
        preview={preview}
      ></Editor>
    </div>
  );
}

export default App;
