import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Hello from '@/components/Hello.vue'

describe('Hello.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Hello, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  })
})
