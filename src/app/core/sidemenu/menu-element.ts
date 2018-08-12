export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': '/auth/dashboard',
        'open': false
    },
    {
        'name': 'Tracking',
        'icon': 'insert_chart',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Activity',
                'link': 'material-widgets/buttons',
                'icon': false,
                'chip': false,
                'open': false,
            },
            {
                'name': 'Financial',
                'link': 'material-widgets/list',
                'icon': false,
                'chip': false,
                'open': false,
            },
            {

                'name': 'Programme Result',
                'link': 'material-widgets/stepper',
                'icon': false,
                'chip': false,
                'open': false,

            }
        ]
    },
    {
        'name': 'Master Modules',
        'icon': 'list',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Programme',
                'icon': false,
                'link': 'master-modules/program',
                'open': false,
            },
            {
                'name': 'Project',
                'icon': false,
                'link': 'master-modules/project',
                'open': false,
            },
            {
                'name': 'Outcome',
                'icon': false,
                'link': 'master-modules/outcome',
                'open': false,
            },
            {
              'name': 'Output',
              'icon': false,
              'link': 'master-modules/output',
              'open': false,
            },
            {
              'name': 'Activity',
              'icon': false,
              'link': 'master-modules/activity',
              'open': false,
            },
            {
              'name': 'Input',
              'icon': false,
              'link': 'master-modules/input',
              'open': false,
            },
            {
              'name': 'Beneficiaries',
              'icon': false,
              'link': 'master-modules/program',
              'open': false,
            },
            {
              'name': 'Financial',
              'icon': false,
              'link': 'master-modules/program',
              'open': false,
            },
            {
              'name': 'Donors',
              'icon': false,
              'link': 'master-modules/program',
              'open': false,
            }
        ]

    },
    {
        'name': 'System users',
        'icon': 'supervisor_account',
        'link': '/auth/guarded-routes',
        'open': false,
    }, {
        'name': 'Report',
        'open': false,
        'link': '/auth/scrumboard',
        'icon': 'insert_drive_file',
    },
     {
      'name': 'Survey',
      'open': false,
      'link': '/auth/scrumboard',
      'icon': 'done',
    },
    {
          'name': 'Data Entry',
          'icon': 'edit',
          'open': false,
          'link': false,
          'sub': [
              {
                  'name': 'Individual Beneficiary',
                  'icon': false,
                  'link': 'chats/chat',
                  'open': false,
              },
              {
                  'name': 'Group Beneficiary',
                  'icon': false,
                  'link': 'mail/mail',
                  'open': false,
              },
              {
                  'name': 'Activities',
                  'icon': false,
                  'link': 'editor/editor',
                  'open': false,
              },
              {
                'name': 'Budget',
                'icon': false,
                'link': 'chats/chat',
                'open': false,
              },
              {
                'name': 'Activities Expenditures',
                'icon': false,
                'link': 'mail/mail',
                'open': false,
              },
              {
                'name': 'Admin Expenditures',
                'icon': false,
                'link': 'editor/editor',
                'open': false,
              },
              {
                'name': 'Intervention Input',
                'icon': false,
                'link': 'chats/chat',
                'open': false,
              }
          ]
      },
      {
        'name': 'custom-forms',
        'icon': 'input',
        'link': '/auth/custom-forms',
        'open': false,
    },
];
