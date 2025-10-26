import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 5L15 5C13.8954 5 13 5.89543 13 7V12M16 19H15C13.8954 19 13 18.1046 13 17V12M13 12H10', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HierarchyCircle03',
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
            _hoisted4
        ])
    }
})
