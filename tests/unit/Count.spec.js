import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Count from '@/components/Count.vue'

describe('Count.vue', () => {
  it('increments counter when button clicked', async () => {
    const wrapper = mount(Count);
    const clicked = 3;
    for (let i = 0; i < clicked; i++) 
      await wrapper.find('button').trigger('click');
    expect(wrapper.find('p').text()).to.include(clicked);
  })
})
