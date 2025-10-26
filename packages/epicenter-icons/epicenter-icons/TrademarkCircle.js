import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.00715 15V9.46387M8.00715 9.46387H10M8.00715 9.46387H6M12.5345 15V9.55361C12.5345 9.5447 12.5453 9.54024 12.5516 9.54654L15.01 12.0076L17.4925 9.54604C17.4988 9.53978 17.5095 9.54425 17.5095 9.55314V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TrademarkCircle',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
