import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 6L18 12M10.9994 7L15.292 2.70715C15.6825 2.31661 16.3157 2.3166 16.7062 2.70713L21.292 7.29289C21.6825 7.68342 21.6825 8.31658 21.292 8.70711L17 12.9991M15 14.9991L7.99908 22H2V16L8.99954 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EditOff',
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
