import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 14H9L10.5 19H13.5L15 14H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 18.9969C19 20.6564 15.866 22.0015 12 22.0015C8.13401 22.0015 5 20.6564 5 18.9969', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '4.5', 'r': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LocationUser02',
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
