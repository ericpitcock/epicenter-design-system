import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 15.3077L8.69231 7L5 9.76923L8.69231 11.6154L9.15385 14.8462L12.3846 15.3077L14.2308 19L17 15.3077Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5002 14.5L21.2556 9.98679C21.6636 9.59956 21.6721 8.9521 21.2743 8.55434L15.4457 2.72583C15.048 2.32807 14.4005 2.33653 14.0133 2.74455L9.50015 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.99999 10.9998L2.70723 14.2927C2.31672 14.6833 2.31673 15.3164 2.70725 15.7069L8.29319 21.2929C8.68372 21.6834 9.3169 21.6834 9.70742 21.2929L13 18.0002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 6L13 11M12 5.00073L19 12.0005', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chocolate',
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
