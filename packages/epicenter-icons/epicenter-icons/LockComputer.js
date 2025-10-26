import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 5.5H15V11H22V5.5H20.5M16.5 5.5V4C16.5 2.89543 17.3954 2 18.5 2C19.6046 2 20.5 2.89543 20.5 4V5.5M16.5 5.5H20.5', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 2L4 2C2.89543 2 2 2.89543 2 4V15.9997C2 17.1043 2.89543 17.9997 4 17.9997H20C21.1046 17.9997 22 17.1043 22 15.9997V14.4997', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 15H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 18L12.0033 21.9953M12.0033 21.9953L16 22M12.0033 21.9953L8 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LockComputer',
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
