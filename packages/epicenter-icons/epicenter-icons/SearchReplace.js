import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 17.5L22 22', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 11C20 15.9706 15.9706 20 11 20C7.74581 20 4.89501 18.2729 3.31422 15.6853M2 11C2 6.02944 6.02944 2 11 2C14.2367 2 17.0743 3.70858 18.6602 6.27301M3 20V15H7.5M19 2V7H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SearchReplace',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
