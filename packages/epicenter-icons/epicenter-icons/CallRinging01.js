import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.11821 13.5314V16.6851C7.11821 17.0061 6.89502 17.2917 6.57455 17.42C6.1287 17.5985 5.4736 17.898 4.86193 18.3186C4.50288 18.5655 3.98943 18.5685 3.67224 18.2773L2.23642 16.959C1.91923 16.6677 1.91802 16.1936 2.25208 15.9187C7.79189 11.3604 16.2081 11.3604 21.7479 15.9187C22.082 16.1936 22.0808 16.6677 21.7636 16.959L20.3278 18.2773C20.0106 18.5685 19.4971 18.5655 19.1381 18.3186C18.5264 17.898 17.8713 17.5985 17.4255 17.42C17.105 17.2917 16.8818 17.0061 16.8818 16.6851L16.8818 13.5314', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 4.5V7.5M18 7.5L16 9.5M6 7.5L8 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CallRinging01',
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
