import Vuex from "vuex"
import { shallowMount, createLocalVue  } from '@vue/test-utils';
import Multiselect from './Multiselect.vue';
import {fakeUser} from './fakeUser.js';

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: {
      users: fakeUser      
    },
    selectedUsers: { 
      selectedUsers: [] 
    },
    options: { 
      options: []
    },
  }
})

describe('Multiselect.vue', () => {
 
  it('should render a multiselect component', () => {
    const wrapper = shallowMount(Multiselect, { 
      store, 
      localVue 
    })

    const selection = wrapper.find('.multiselect__selection');
    expect(selection).toBeDefined();
  });
  
  it('It should open input when multiselect is clicked', () => {
    const wrapper = shallowMount(Multiselect, { 
      store, 
      localVue 
    })

    const selection = wrapper.find('.multiselect__search');
    wrapper.vm.openMultiselect()    
    expect(selection.isVisible()).toBeTruthy()
  });

  it('It should open list when multiselect is clicked', () => {
    const wrapper = shallowMount(Multiselect, { 
      store, 
      localVue 
    })

    const selection = wrapper.find('.multiselect__list__container__element');
    wrapper.vm.openMultiselect()    
    expect(selection.isVisible()).toBeTruthy()
  });

  it('It should add a value to option when list element is clicked', () => {
    const wrapper = shallowMount(Multiselect, { 
      store, 
      localVue 
    })

    const selection = wrapper.find('.multiselect__selection__tag');
    wrapper.vm.openMultiselect()    
    wrapper.vm.addItem(store.state.users.users)    
    expect(selection.isVisible()).toBeTruthy()
  }); 
});
