import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 8C14.5 5.23858 12.2614 3 9.5 3C6.73858 3 4.5 5.23858 4.5 8C4.5 10.7614 6.73858 13 9.5 13C12.2614 13 14.5 10.7614 14.5 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 21L18.5 18M18.5 18L21.5 15M18.5 18L15.5 15M18.5 18L21.5 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 20C2.5 16.134 5.63401 13 9.5 13C10.775 13 11.9704 13.3409 13 13.9365', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserRemove01',
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
