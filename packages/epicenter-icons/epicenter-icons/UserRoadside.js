import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 16.8468H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 21V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 16.8468H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 13.5H9L10.5 18.5H13.5L15 13.5H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('circle', { 'cx': '12', 'cy': '4.5', 'r': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserRoadside',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
