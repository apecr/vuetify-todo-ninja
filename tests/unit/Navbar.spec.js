import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('Navbar.vue', () => {
  it('Show title of project', () => {
    const msg = 'TodoNinja';
    const wrapper = shallowMount(Navbar, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
