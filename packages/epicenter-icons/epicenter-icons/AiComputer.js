import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.0142 2.00022L4.00009 2.00005C2.89549 2.00002 2.00002 2.89549 2.00004 4.00009L2.0003 16.0002C2.00032 17.1048 2.89576 18.0002 4.00032 18.0002L20.0001 18C21.1046 18 22 17.1046 22.0001 16.0001L22.0002 13.0002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 15H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 5C20 4.44772 19.5523 4 19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5 10V11.5M18.5 10V11.5M15.5 2.5V4M18.5 2.5V4M14 5.5H12.5M14 8.5H12.5M21.5 5.5H20M21.5 8.5H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 18.0013V22M8 22H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AiComputer',
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
