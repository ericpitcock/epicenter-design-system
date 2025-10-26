import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 15L6 22M16 15L18 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 12L7.8199 3.801C7.92214 2.7786 8.78247 2.00001 9.80997 2L14.19 2C15.2175 2 16.0779 2.77859 16.1801 3.80099L17 12', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 14V15H18V14C18 13.0917 17.4538 12.2724 16.6154 11.9231C13.6615 10.6923 10.3385 10.6923 7.38462 11.9231C6.54616 12.2724 6 13.0917 6 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chair01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
