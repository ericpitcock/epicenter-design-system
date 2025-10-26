import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '17', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '7', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 18H3.00175C2.44952 18 2.00182 17.5524 2.00175 17.0001L2.00013 5.00013C2.00006 4.4478 2.4478 4 3.00013 4H13.5C14.0523 4 14.5 4.44772 14.5 5V10C14.5 10.5523 14.9477 11 15.5 11H22V17C22 17.5523 21.5523 18 21 18H19M9 18H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 6H17.4587C18.1113 6 18.7229 6.31842 19.0972 6.85308L22 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 9V11M6 9V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ContainerTruck',
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
