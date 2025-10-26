import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 8H22' })
const _hoisted3 = h('path', { 'd': 'M5 5H9', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 5.0001V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 18C10.6569 18 12 16.6569 12 15C12 13.3431 10.6569 12 9 12C7.34315 12 6 13.3431 6 15C6 16.6569 7.34315 18 9 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M15 18L15.0084 15.5M15.0084 15.5V12.0998C15.0084 12.0387 15.0625 11.9917 15.1229 12.0026C15.5495 12.079 16.3501 12.2911 16.8569 12.8032C17.0336 12.9819 17.115 13.2274 17.1589 13.4743L17.4984 15.3826C17.5093 15.4438 17.462 15.5 17.3995 15.5H15.0084Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DishWasher',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
