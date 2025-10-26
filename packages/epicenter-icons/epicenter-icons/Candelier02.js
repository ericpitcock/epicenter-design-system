import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 3H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 3V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19.5 3V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4.5 3V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19.4982 16C18.4965 16 17.002 15.5 17.002 14.5868C17.002 12.5 18.0959 11 19.4983 11C20.9005 11 21.998 12.5 21.998 14.5C22 15.5 20.5 16 19.4982 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M4.49628 16C3.49452 16 2 15.5 2 14.5868C2 12.5 3.09397 11 4.49632 11C5.89854 11 6.99608 12.5 6.99608 14.5C6.99805 15.5 5.49805 16 4.49628 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M11.9963 21C10.9945 21 9.5 20.5 9.5 19.5868C9.5 17.5 10.594 16 11.9963 16C13.3985 16 14.4961 17.5 14.4961 19.5C14.498 20.5 12.998 21 11.9963 21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Candelier02',
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
            _hoisted6,
            _hoisted7
        ])
    }
})
