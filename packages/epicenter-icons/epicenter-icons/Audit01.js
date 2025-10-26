import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H17C18.1046 2 19 2.89543 19 4V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 7H14.5M7.5 11H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 22L18.9749 19.9749M18.9749 19.9749C19.6082 19.3415 20 18.4665 20 17.5C20 15.567 18.433 14 16.5 14C14.567 14 13 15.567 13 17.5C13 19.433 14.567 21 16.5 21C17.4665 21 18.3415 20.6082 18.9749 19.9749Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Audit01',
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
