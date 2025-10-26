import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 20C4 18.5 5.5 15 5.99988 11L10 12.5C10 12.5 7.99997 14.4895 9 16.5C6.99994 18.0079 8 20.5 8 20.5C7.44502 21.3368 6.5 22 5 22C4 22 2.89011 21.3422 2 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 20C20 18.5 18.5 15 18.0001 11L14 12.5C14 12.5 16 14.4895 15 16.5C17.0001 18.0079 16 20.5 16 20.5C16.555 21.3368 17.5 22 19 22C20 22 21.1099 21.3422 22 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 4.5C9.5 5.88071 10.6193 7 12 7C13.3807 7 14.5 5.88071 14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 11.5L10 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 11.5L15 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HandGrip',
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
