import reducers from './index';

test('reducers', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
    example: {
      items: []
    },
    forms: {
      register: {
        firstName: '',
        lastName: '',
        email: ''
      },
      forms: {
        $form: {
          initialValue: {
            register: {
              firstName: '',
              lastName: '',
              email: ''
            }
          },
          focus: false,
          pending: false,
          pristine: true,
          submitted: false,
          submitFailed: false,
          retouched: false,
          touched: false,
          valid: true,
          validating: false,
          validated: false,
          validity: {},
          errors: {},
          intents: [],
          model: '',
          value: {
            register: {
              firstName: '',
              lastName: '',
              email: ''
            }
          }
        },
        register: {
          $form: {
            initialValue: {
              firstName: '',
              lastName: '',
              email: ''
            },
            focus: false,
            pending: false,
            pristine: true,
            submitted: false,
            submitFailed: false,
            retouched: false,
            touched: false,
            valid: true,
            validating: false,
            validated: false,
            validity: {},
            errors: {},
            intents: [],
            model: 'register',
            value: {
              firstName: '',
              lastName: '',
              email: ''
            }
          },
          firstName: {
            initialValue: '',
            focus: false,
            pending: false,
            pristine: true,
            submitted: false,
            submitFailed: false,
            retouched: false,
            touched: false,
            valid: true,
            validating: false,
            validated: false,
            validity: {},
            errors: {},
            intents: [],
            model: 'register.firstName',
            value: ''
          },
          lastName: {
            initialValue: '',
            focus: false,
            pending: false,
            pristine: true,
            submitted: false,
            submitFailed: false,
            retouched: false,
            touched: false,
            valid: true,
            validating: false,
            validated: false,
            validity: {},
            errors: {},
            intents: [],
            model: 'register.lastName',
            value: ''
          },
          email: {
            initialValue: '',
            focus: false,
            pending: false,
            pristine: true,
            submitted: false,
            submitFailed: false,
            retouched: false,
            touched: false,
            valid: true,
            validating: false,
            validated: false,
            validity: {},
            errors: {},
            intents: [],
            model: 'register.email',
            value: ''
          }
        }
      }
    }
  });
});
