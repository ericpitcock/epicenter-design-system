import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.292 8.70711L7.99908 22H2V16L15.292 2.70715C15.6825 2.31661 16.3157 2.3166 16.7062 2.70713L21.292 7.29289C21.6825 7.68342 21.6825 8.31658 21.292 8.70711Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 6L18 12', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Edit02',
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
