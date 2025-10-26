import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 19L17 18.4V16M13 18C13 20.2091 14.7909 22 17 22C19.2091 22 21 20.2091 21 18C21 15.7909 19.2091 14 17 14C14.7909 14 13 15.7909 13 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 13H8C5.23858 13 3 15.2386 3 18V19C3 19.5523 3.44772 20 4 20H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserTime03',
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
