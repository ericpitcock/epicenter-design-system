import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 4C17.6569 4 19 5.34315 19 7C19 8.22309 18.2681 9.27523 17.2183 9.7423', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 14H10C7.79086 14 6 15.7909 6 18V20H18V18C18 15.7909 16.2091 14 14 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 13C20.2091 13 22 14.7909 22 17V19H20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 4C6.34315 4 5 5.34315 5 7C5 8.22309 5.73193 9.27523 6.78168 9.7423', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M6 13C3.79086 13 2 14.7909 2 17V19H3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserGroup03',
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
