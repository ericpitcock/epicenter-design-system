import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 18.002C7.49805 18 5.99805 16.5 5.99805 15C4.49805 15 3 13.5 3 11.502C3 10.0052 3.99805 9 5.49805 8.5C5.33034 8.1258 5 7.43856 5 7.00195C5 5.3451 6.34315 4.00195 8 4.00195C8.39025 4.00195 8.76309 4.07647 9.10508 4.21204C9.45179 2.93842 10.6165 2.00195 12 2.00195M14.998 18.002C16.5 18 18 16.5 18 15C19.5 15 20.998 13.5 20.998 11.502C20.998 10.0052 20 9 18.5 8.5C18.6677 8.1258 18.998 7.43856 18.998 7.00195C18.998 5.3451 17.6549 4.00195 15.998 4.00195C15.6078 4.00195 15.235 4.07647 14.893 4.21204C14.5463 2.93842 13.3815 2.00195 11.998 2.00195', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 15L14.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13L9.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tree06',
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
