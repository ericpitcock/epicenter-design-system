import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 7.5L2 16.5C2 17.6046 2.89543 18.5 4 18.5L20 18.5C21.1046 18.5 22 17.6046 22 16.5V7.5C22 6.39543 21.1046 5.5 20 5.5L4 5.5C2.89543 5.5 2 6.39543 2 7.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 11.9983L19 11.9883', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartPhoneLandscape',
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
