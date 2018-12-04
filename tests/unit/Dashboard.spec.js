import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';

describe('Dashboard.vue', () => {
  it('Show correct H1', () => {
    const msg = 'Homepage';
    const wrapper = shallowMount(Dashboard);
    expect(wrapper.text()).to.include(msg);
  });
});
