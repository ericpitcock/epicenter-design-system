import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19C8 20.6569 6.65685 22 5 22Z' })
const _hoisted2 = h('path', { 'd': 'M19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19C22 20.6569 20.6569 22 19 22Z' })
const _hoisted3 = h('path', { 'd': 'M19.0001 16V15C19.0001 13.8954 18.1046 13 17.0001 13L6.99972 13C5.89488 13 4.99934 13.8959 4.99972 15.0007L5.00007 16', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10Z' })

export default defineComponent({
    name: 'HierarchyCircle02',
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
