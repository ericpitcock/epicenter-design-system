import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 14H9L10.5 19H13.5L15 14H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '4.5', 'r': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 17.5L19.875 20.5939C20.169 21.2551 19.6849 22 18.9612 22H4.97681C4.2694 22 3.78565 21.2856 4.04828 20.6287L5.49918 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LocationUser04',
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
