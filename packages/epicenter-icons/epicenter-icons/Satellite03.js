import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.8568 11.663C19.3811 10.1387 19.3811 7.66744 17.8568 6.14319C16.3326 4.61894 13.8614 4.61894 12.3372 6.14319L8.70719 9.77273C8.31663 10.1632 8.3166 10.7964 8.70713 11.187L12.8129 15.2929C13.2034 15.6834 13.8366 15.6834 14.2271 15.2929L17.8568 11.663Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.8483 14C6.96714 15.5706 8.41803 17.0084 10 17.1305M3.00586 15.2381C2.85202 18.2662 5.7538 21.1419 8.80421 20.9946', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 11.5L21 14L18 17L15.5 14.5M12.5 5.5L10 3L7 6L9.5 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Satellite03',
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
